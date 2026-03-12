import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin } from 'lucide-react';
import { StatusBadge } from './StatusBadge';

export const ProjectCard = ({ project }) => {
  return (
    <Link 
      to={`/dpr/${project.id}`}
      className="block bg-white border border-slate-200 rounded-[10px] overflow-hidden shadow-[0_2px_4px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.06)] hover:border-slate-300 transition-all group relative"
    >
      <div className="relative h-48 w-full overflow-hidden bg-slate-100 border-b border-slate-100">
        <StatusBadge 
          status={project.status} 
          className="absolute top-3 right-3 z-10" 
        />
        {project.imageUrl && (
          <img 
            src={project.imageUrl} 
            alt={project.projectName} 
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" 
          />
        )}
      </div>

      <div className="p-5 bg-white">
        <h3 className="text-[17px] font-bold text-slate-800 group-hover:text-[#007b83] transition-colors mb-4 line-clamp-1">
          {project.projectName}
        </h3>
        
        <div className="space-y-2.5">
          <div className="flex items-center text-xs font-semibold text-slate-500">
            <Calendar className="w-[15px] h-[15px] mr-2.5 text-slate-400 stroke-[2]" />
            Started: {new Date(project.startDate).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}
          </div>
          <div className="flex items-center text-xs font-semibold text-slate-500 line-clamp-1">
            <MapPin className="w-[15px] h-[15px] mr-2.5 text-slate-400 stroke-[2]" />
            {project.location}
          </div>
        </div>
      </div>
    </Link>
  );
};
