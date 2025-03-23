
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface StatsCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
  className?: string;
}

export const StatsCard = ({ value, label, icon, className }: StatsCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={cn(
        "relative overflow-hidden rounded-xl bg-white border border-gray-100 shadow-lg p-6",
        className
      )}
    >
      <div className="flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <div className="text-4xl font-bold text-reach-purple">{value}</div>
          {icon && (
            <div className="p-2 bg-reach-purple/10 rounded-full text-reach-purple">
              {icon}
            </div>
          )}
        </div>
        <p className="text-gray-600 font-medium">{label}</p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-reach-purple to-reach-gold opacity-70"></div>
    </motion.div>
  );
};
