import { useNavigate, generatePath } from 'react-router-dom';

import { Pagination } from '@/components/Pagination';
import { Card as TextCard } from '@/components/Card';

import { RoomCardSlot } from '@/pages/Room/components/RoomCardSlot';
import { TALK_PATH } from '@/constants/paths';
import { useState } from 'react';
import { useMyBookmarkedTalkListQuery } from '@/services/talk/useMyBookmarkedTalkListQuery';
import { SkeletonCard } from '@/components/Skeleton';

import { NoBookmark } from '../NoBookmark';
import { NAV_TABS } from '../../constants';

/**
 * 내가 저장한 혼잣말 글 목록 컴포넌트
 */

const TalkList = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const { data, isLoading, isFetching } = useMyBookmarkedTalkListQuery({ page: currentPage, size: 20 });

  const navigate = useNavigate();

  const handlePageMove = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <>
      {!data?.content.length ? (
        <NoBookmark {...NAV_TABS.talk} />
      ) : (
        <div className="w-full flex flex-col justify-between mt-10">
          <div className="mb-4 flex items-center">
            <span className="text-medium text-gray700 mr-1">전체</span>
            <span className="text-sm font-light text-gray400">{data.totalElements}</span>
          </div>
          <div className="flex flex-col justify-between">
            <div className="grid grid-cols-4 gap-6 place-items-start pb-12">
              {isLoading || isFetching
                ? Array.from({ length: 20 }).map((_, index) => <SkeletonCard key={index} />)
                : data?.content?.map((card) => (
                    <TextCard
                      key={card?.id}
                      description={card?.contentSummary}
                      title={card?.title}
                      userName={card?.memberName}
                      userImage={card.imageUrl}
                      lineClamp={1}
                      slot={<RoomCardSlot createdAt={card?.createdAt} commentCount={card?.commentCount} />}
                      likes={card?.likeCount}
                      onPageMove={() =>
                        navigate(
                          generatePath(TALK_PATH.detail, {
                            id: card.id.toString(),
                          }),
                        )
                      }
                    />
                  ))}
            </div>
            {data?.totalPages > 1 && (
              <Pagination
                totalPage={data?.totalPages as number}
                currentPage={currentPage}
                onPageChange={handlePageMove}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default TalkList;
