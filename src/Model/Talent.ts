export interface Talent{
  id: string;
  name: string;
  group: string;
  subscriber_count: string;
  top_topics: string[];
  description?: string;
  photo?: string;
  banner?: string;
  video_count?: string;
  view_count?: string;
  clip_count?: string;
  inactive?: boolean;
  twitch?: string;
  twitter?: string;
}