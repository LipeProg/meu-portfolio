import { techBadgeStyles as styles } from './TechBadge.styles';

interface TechBadgeProps {
  technology: string;
}

export default function TechBadge({ technology }: TechBadgeProps) {
  return (
    <span className={styles.badge}>
      {technology}
    </span>
  );
}
