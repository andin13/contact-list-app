import { IFilter } from '../../redux/commonTypes/IFilter';

export interface ContactsFilterProps {
    filter: IFilter;
    setFilter: (arg0: IFilter) => void;
}
