
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ClientCardProps {
  name: string;
  description: string;
  stats: string;
  image: string;
  className?: string;
}

export const ClientCard = ({
  name,
  description,
  stats,
  image,
  className,
}: ClientCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={cn(
        "overflow-hidden rounded-xl bg-white border border-gray-100 shadow-lg group",
        className
      )}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h3 className="text-xl font-bold tracking-tight">{name}</h3>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <div className="py-2 px-3 bg-reach-purple/10 rounded-lg text-reach-purple font-medium text-sm">
          {stats}
        </div>
      </div>
    </motion.div>
  );
};
