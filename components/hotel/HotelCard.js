import Image from 'next/image';
import HotelSummaryInfo from './HotelSummaryInfo';

const HotelCard = ({ hotel, checkin, checkout }) => {
    return (
        <div className="flex gap-6 border border-gray/20 p-4 rounded-md">
            <Image
                src={hotel?.thumbNailUrl}
                className="max-h-[162px] max-w-[240px]"
                height={162}
                width={240}
                alt={hotel?.name}
            />
            <HotelSummaryInfo
                fromListPage={true}
                hotel={hotel}
                checkin={checkin}
                checkout={checkout}
            />
        </div>
    );
};

export default HotelCard;
