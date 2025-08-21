import { Link, useNavigate } from 'react-router-dom';
import { tabs } from '../types/Tab';

export function TabsList({ activeId }: { activeId?: string }) {
  const navigate = useNavigate();

  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(t => (
          <li
            key={t.id}
            data-cy="Tab"
            className={activeId === t.id ? 'is-active' : ''}
            onClick={() => navigate(`/tabs/${t.id}`)}
          >
            <Link to={`/tabs/${t.id}`}>{t.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
