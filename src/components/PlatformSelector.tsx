import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatfroms, { Platfrom } from '../hooks/usePlatforms';

interface Props {
  selectedPlatform: Platfrom | null;
  onSelectPlatform: (platform: Platfrom) => void;
}

function PlatformSelector({ selectedPlatform, onSelectPlatform }: Props) {
  const { data, error } = usePlatfroms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
