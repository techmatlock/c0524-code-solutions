import { useState } from 'react';
import { TopicCard } from './TopicCard';

type Props = {
  topics: TopicsContent[];
};

type TopicsContent = {
  id: number;
  title: string;
  content: string;
};

export function Accordion({ topics }: Props) {
  const [openTopic, setOpenTopic] = useState<TopicsContent>();

  function handleClick(topic: TopicsContent) {
    setOpenTopic(topic);
  }

  return (
    <>
      {topics.map((topic) => (
        <TopicCard
          key={topic.id}
          topic={topic}
          isActive={topic === openTopic}
          onClick={() => handleClick(topic)}
        />
      ))}
    </>
  );
}
