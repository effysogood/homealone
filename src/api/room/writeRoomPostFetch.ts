import { apiFetch } from '../common';
import { ResponseModel } from '../model';

export interface WriteRoomPostFetchParams {
  /**
   * 방자랑 제목
   */
  title: string;

  /**
   * 방자랑 내용 컨텐츠
   */
  content: string;

  /**
   * 방자랑 썸네일 이미지
   */
  thumbnailUrl: string;

  /**
   * 방자랑 썸네일 이미지
   */
  RoomImages: string[];
}

export interface WriteRoomResponse extends ResponseModel {}

/**
 * 방자랑 게시글 작성 및 등록
 */
export const writeRoomPostFetch = (params: WriteRoomPostFetchParams) =>
  apiFetch.post<WriteRoomResponse>('/room', params);
