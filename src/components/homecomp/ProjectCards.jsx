import React from 'react'

const ProjectCards = ({ title, items }) => {
    return (
        <div className="flex min-w-1/4 w-full self-stretch">
          {items.length > 0 && (
            <div className="flex flex-col bg-oxford_blue-300 rounded-xl p-4 ">
              <h3 className="text-xl font-bold mb-4 text-rich_black-800">{title}</h3>
              <ul>
                {items.map((item, index) => (
                 
                    <p>{item}</p>
                  
                ))}
              </ul>
            </div>
          )}
        </div>
      );
    };

export default ProjectCards