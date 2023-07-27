import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  selectedOrder: string;
}

const SortSelector = ({ onSelectSortOrder, selectedOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === selectedOrder
  );
  return (
    <Menu>
      <MenuButton mx={5} as={Button} rightIcon={<BsChevronBarDown />}>
        Order By : {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((item) => (
          <MenuItem
            onClick={() => onSelectSortOrder(item.value)}
            key={item.value}
            value={item.value}
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
