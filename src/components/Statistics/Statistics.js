import { StatisticsItem } from "./StatisticsItem";
import { ContainerStatistics, TitleStatistics, ListStatistics } from "./Statistics.styled";
export const Statistics = ({ title, stats }) => {
    return (
        <ContainerStatistics>
        {title && <TitleStatistics>{title}</TitleStatistics>}
              <ListStatistics>
                {stats.map(stat => (
                     <StatisticsItem key={stat.id} stat={stat} />
                  ))}  
             </ListStatistics>
        </ContainerStatistics>
    )
}

