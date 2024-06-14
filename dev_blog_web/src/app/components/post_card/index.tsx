"use client";

import Link from "next/link";
import Button from "../atoms/button";

interface PostItemProps {
  id: string;
  title: string;
  description: string;
  createdAt?: Date;
  onUpdate?: () => void;
  onDelete?: () => void;
}

const PostCard: React.FC<PostItemProps> = ({
  id,
  title,
  description,
  createdAt,
  onDelete,
  onUpdate,
}) => {
  const canEdit = onUpdate && onDelete;
  
  return (
    <div
      key={id}
      className="flex max-w-xl flex-col items-start justify-between"
    >
      <div className="flex items-center gap-x-4 text-xs">
        {createdAt && (
          <time dateTime={createdAt.toISOString()} className="text-gray-500 dark:text-white">
            {createdAt && createdAt.toLocaleDateString()}
          </time>
        )}
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 dark:text-white dark:group-hover:text-white">
          <Link href={`/posts/${id}`}>{title}</Link>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-white">
          {description}
        </p>
      </div>
      {canEdit && (
        <div className="mt-4 flex space-x-2 w-full">
          <Button variant="white" className="!w-full flex-1" onClick={onUpdate}>
            Editar
          </Button>
          <Button variant="red" className="!w-full flex-1" onClick={onDelete}>
            Excluir
          </Button>
        </div>
      )}
    </div>
  );
};

export default PostCard;