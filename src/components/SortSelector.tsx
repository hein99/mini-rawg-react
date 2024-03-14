import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

function SortSelector() {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: Relevant
      </MenuButton>
      <MenuList>
        <MenuItem>Relevant</MenuItem>
        <MenuItem>Date add</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Release date</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Avarage rating</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
