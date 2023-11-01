import { ItemFriendListItem, StatusFriendListItem, ImgFriendListItem, NameFriendListItem } from "./FriendListItem.styled";
export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
    return ( 
        <ItemFriendListItem>
            <StatusFriendListItem $isOnline={isOnline}></StatusFriendListItem>
            <ImgFriendListItem src={avatar} alt={name} width="48" />
            <NameFriendListItem>{name}</NameFriendListItem>
        </ItemFriendListItem>
    ) 
}

