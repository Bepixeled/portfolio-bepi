import React from 'react';
import * as Unicons from '@iconscout/react-unicons';

const SkillCard = ({ title, items }) => {
    return (
        <div className="flex min-w-1/4 w-full self-stretch">
          {items.length > 0 && (
            <div className="flex flex-col bg-oxford_blue-300 rounded-xl p-4 ">
              <h3 className="text-xl font-bold mb-4 text-rich_black-800">{title}</h3>
              <ul>
                {items.map((item, index) => (
                  <li key={index} className="flex items-center text-ruddy_blue-900">
                    <div className="pr-2">
                      <Unicons.UilStar />
                    </div>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      );
    };

export default SkillCard;