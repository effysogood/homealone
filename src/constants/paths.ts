/**
 * route path
 */
export const PATH = Object.freeze({
  /**
   * main
   */
  root: '/' as const,

  /**
   * 로그인
   */
  login: '/login' as const,

  /**
   * 회원가입
   */
  register: '/register' as const,

  /**
   * 레시피 페이지
   */
  receipe: '/reciepe' as const,

  /**
   * 레시피 작성페이지
   */
  receipeWrite: '/reciepe/write' as const,

  /**
   * 방자랑 페이지
   */
  room: '/room' as const,

  /**
   * 방자랑 작성페이지
   */
  roomWrite: '/room/write' as const,

  /**
   * 혼잣말 페이지
   */
  talk: '/talk' as const,
});

/**
 * Reciepe 상세
 */
export const RECIEPE_PATH = Object.freeze({
  /**
   * generatePath
   */
  detail: '/reciepe/:id' as const,
});

/**
 * room 상세
 */
export const ROOM_PATH = Object.freeze({
  /**
   * generatePath
   */
  detail: '/room/:id' as const,
});

/**
 * talk 상세
 */
export const TALK_PATH = Object.freeze({
  /**
   * generatePath
   */
  detail: '/talk/:id' as const,
});

export type PathValue = ValueOf<typeof PATH>;
