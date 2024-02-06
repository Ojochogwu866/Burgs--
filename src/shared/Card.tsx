
interface CardProps {
    title: string;
    content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
    return (
        <div className=" w-[200px] h-[200px] justify-center items-start flex flex-col text-sm p-10 bg-clip-padding backdrop-filter bg-gray-200 backdrop-blur-sm bg-opacity-10 drop-shadow">
            <h2 className=" font-semibold">{title}</h2>
            <p>{content}</p>
        </div>
    );
};

export default Card;
