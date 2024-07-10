type Props = {
  isActive: boolean;
  topic: TopicsContent;
  onClick: () => void;
};

type TopicsContent = {
  id: number;
  title: string;
  content: string;
};

export function TopicCard({ topic, isActive, onClick }: Props) {
  return (
    <div className="flex flex-col max-w-sm">
      <div key={topic.title}>
        <h3 onClick={onClick} className="bg-gray-500 p-2">
          {topic.title}
        </h3>
        {isActive && <p className="bg-gray-300 text-black">{topic.content}</p>}
      </div>
    </div>
  );
}
