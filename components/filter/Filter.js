import FilterByAmenities from './FilterByAmenities';
import FilterByPriceRange from './FilterByPriceRange';
import FilterByStarCategory from './FilterByStarCategory';
import Sort from './Sort';

const Filter = () => {
    return (
        <>
            <div className="col-span-3 space-y-4">
                <Sort />
                <FilterByPriceRange />

                <FilterByStarCategory />

                <FilterByAmenities />
            </div>
        </>
    );
};

export default Filter;
