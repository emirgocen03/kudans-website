import Image from 'next/image';
import type { BoardMember } from '../data';

interface BoardMemberCardProps {
  member: BoardMember;
}

export default function BoardMemberCard({ member }: BoardMemberCardProps) {
  return (
    <div id={member.id} className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-xl transition-all duration-300 hover:border-purple-500/30 group">
      <div className="aspect-square bg-gray-800 relative">
        <Image
          src={member.imageSrc}
          alt={`${member.name} - ${member.role}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          loading="lazy"
          quality={85}
        />
        <div className="absolute bottom-3 right-3">
          <span className={`px-3 py-1 text-xs font-medium rounded-full text-white border border-${member.danceStyleColor}-500`}>
            {member.danceStyle}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold mb-1 text-white group-hover:text-purple-400 transition-colors duration-300">
          {member.name}
        </h3>
        <p className="text-purple-400 font-medium mb-2">{member.role}</p>
        <p className="text-gray-400 text-sm">
          {member.department}, {member.year}
        </p>
      </div>
    </div>
  );
} 