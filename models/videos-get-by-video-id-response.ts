/*
Tavus Developer API Collection

We're an AI video research company making personalized video possible at scale. Generate videos of yourself, and never record again! Available via web app & developer APIs.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { VideosGetByVideoIdResponseData } from './videos-get-by-video-id-response-data';

/**
 * 
 * @export
 * @interface VideosGetByVideoIdResponse
 */
export interface VideosGetByVideoIdResponse {
    /**
     * The date and time the video was created.
     * @type {string}
     * @memberof VideosGetByVideoIdResponse
     */
    'created_at'?: string;
    /**
     * 
     * @type {VideosGetByVideoIdResponseData}
     * @memberof VideosGetByVideoIdResponse
     */
    'data'?: VideosGetByVideoIdResponseData;
    /**
     * A direct link to download your generated video.
     * @type {string}
     * @memberof VideosGetByVideoIdResponse
     */
    'download_url'?: string;
    /**
     * A direct link to view your generated video, hosted by Tavus.
     * @type {string}
     * @memberof VideosGetByVideoIdResponse
     */
    'hosted_url'?: string;
    /**
     * The status of the video.
     * @type {string}
     * @memberof VideosGetByVideoIdResponse
     */
    'status'?: string;
    /**
     * A detailed status of the video.
     * @type {string}
     * @memberof VideosGetByVideoIdResponse
     */
    'status_details'?: string;
    /**
     * A direct link to stream your generated video.
     * @type {string}
     * @memberof VideosGetByVideoIdResponse
     */
    'stream_url'?: string;
    /**
     * The date and time of when the video was last updated.
     * @type {string}
     * @memberof VideosGetByVideoIdResponse
     */
    'updated_at'?: string;
    /**
     * A unique identifier for the video.
     * @type {string}
     * @memberof VideosGetByVideoIdResponse
     */
    'video_id'?: string;
}
