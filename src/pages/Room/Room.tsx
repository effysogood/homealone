import { useForm, FormProvider } from 'react-hook-form';
import { Search } from 'lucide-react';
import { useNavigate, generatePath } from 'react-router-dom';

import { Appbar } from '@/components/Appbar';
import { Searchbar } from '@/components/Searchbar';
import { Select } from '@/components/Select';
import { Pagination } from '@/components/Pagination';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/Card';

import { Layout } from '@/layout';
import { CATEGORY_OPTIONS } from '../Main/constants';
import { ListTitle } from '../Main/components/ListTitle';
import { DateSlot } from '../Main/components/DateSlot';

import { PATH, ROOM_PATH } from '@/constants/paths';
import { Button } from '@/components/ui/button';

/**
 * 방자랑 페이지 컴포넌트
 */
const Room = () => {
  const navigate = useNavigate();

  const method = useForm({
    values: { category: '전체', query: '' },
  });

  return (
    <>
      <Appbar />
      <Layout>
        <FormProvider {...method}>
          <div className="flex w-[40rem] gap-4 mx-auto">
            <Select name="category" options={CATEGORY_OPTIONS} />
            <div className="w-[40rem] m-auto relative">
              <Searchbar />
              <Search className="absolute top-[0.5rem] right-[0.6rem] appearance-none" stroke="#737373" />
            </div>
          </div>
        </FormProvider>
        <div className="flex justify-between items-center">
          <ListTitle
            imgPath="/icons/room_icon.png"
            title="케빈들의 아지트"
            description="다른사람들의 아지트를 확인해보세요!"
          />
          <Button className="rounded-full" onClick={() => navigate(PATH.roomWrite)}>
            새 글 작성
          </Button>
        </div>
        <div className="grid grid-cols-4 gap-6 place-items-start">
          {Array.from({ length: 20 }).map((_, i) => (
            <Card
              onPageMove={() =>
                navigate(
                  generatePath(ROOM_PATH.detail, {
                    id: i.toString(),
                  }),
                )
              }
              key={i}
              imgPath="https://github.com/shadcn.png"
              lineClamp={1}
              slot={<DateSlot dateTime="2024년 5월 31일" />}
              likes={40}
            />
          ))}
        </div>
        <Pagination totalPage={4} totalItem={80} currentPage={1} onPageChange={() => alert('페이지네이션 로직 필요')} />
      </Layout>
      <Footer />
    </>
  );
};

export default Room;
