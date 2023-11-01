import { ItemStatistics, LabelStatistics, PercentageStatistics } from "./StatisticsItem.styled";
export const StatisticsItem = ({ stat: { label, percentage } }) => {
    return (
        <ItemStatistics>
            <LabelStatistics>{label}</LabelStatistics>
            <PercentageStatistics>{percentage}%</PercentageStatistics>  
        </ItemStatistics>
    )
}
