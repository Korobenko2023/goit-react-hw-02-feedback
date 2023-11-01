import { ContainerFriendList } from './FriendList.styled';
import { FriendListItem } from './FriendListItem';
export const FriendList = ({ friends }) => {
    return (
        <ContainerFriendList>
            <ul>
                {friends.map(friend => (                
                    <FriendListItem key={friend.id} friend={friend} />                              
                ))}
            </ul>
        </ContainerFriendList>
    );    
}

        
         