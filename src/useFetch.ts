import {useState, useEffect} from 'react'

const useFetch = ({url, options} : {url: string, options: RequestInit}) => {
    const [data, setData] = useState()
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState()

    useEffect(() => {
        const abortController = new AbortController()
        
        fetch(url, {...options, signal: abortController.signal})
            .then(response => {
                if(!response.ok) { throw Error("Could not fetch data. :(") }
                return response.json()
            })
            .then((data) => {
                setData(data)
                setIsPending(false)
                setError(undefined)
            })
            .catch(err => {
                if(err.name === 'AbortError') { console.log("fetch aborted") }
                else{
                    setError(err.message)
                    setIsPending(false)
                }
            })

        return () => abortController.abort()
        // hack: this warning disabling
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])

    return {data, isPending, error}
}

export default useFetch