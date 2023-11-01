import { ContainerProfile, ContainerDescription, ImgProfile, NameProfile, TagProfile, LocationProfile, ListStats, ItemStats, LabelStats, QuantityStats } from "./Profile.styled"

export const Profile = ({ user: { avatar, username, tag, location, stats } }) => {
    return (
      <ContainerProfile>
        <ContainerDescription>
          <ImgProfile
            src={avatar}
            alt={username} width='200' height='200'
          />
          <NameProfile>{username}</NameProfile>
          <TagProfile>@{tag}</TagProfile>
          <LocationProfile>{location}</LocationProfile>
        </ContainerDescription>
        <ListStats>
          <ItemStats>
            <LabelStats>Followers</LabelStats>
            <QuantityStats>{stats.followers}</QuantityStats>
          </ItemStats>
          <ItemStats>
            <LabelStats>Views</LabelStats>
            <QuantityStats>{stats.views}</QuantityStats>
          </ItemStats>
          <ItemStats>
            <LabelStats>Likes</LabelStats>
            <QuantityStats>{stats.likes}</QuantityStats>
          </ItemStats>
        </ListStats>
      </ContainerProfile>
    )
}
