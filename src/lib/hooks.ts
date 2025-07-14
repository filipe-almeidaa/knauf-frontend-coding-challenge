import {
  UseDispatch,
  useDispatch,
  UseSelector,
  useSelector,
  UseStore,
  useStore,
} from 'react-redux';
import type { RootState, AppDispatch, AppStore } from '@/lib/store';

export const useAppDispatch: UseDispatch<AppDispatch> = useDispatch.withTypes<AppDispatch>();
export const useAppSelector: UseSelector<RootState> = useSelector.withTypes<RootState>();
export const useAppStore: UseStore<AppStore> = useStore.withTypes<AppStore>();
