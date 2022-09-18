import { JOB_LIST_SHOWING_ITEMS } from '../../../../constants/constans';

export const buttonHandler = (
  loadMore: number,
  setLoadMore: React.Dispatch<React.SetStateAction<number>>
) => {
  loadMore === JOB_LIST_SHOWING_ITEMS
    ? setLoadMore((prevState) => prevState + JOB_LIST_SHOWING_ITEMS)
    : setLoadMore(JOB_LIST_SHOWING_ITEMS);
};
