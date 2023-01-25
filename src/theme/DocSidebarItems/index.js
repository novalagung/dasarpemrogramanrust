import React, {memo} from 'react';
import {DocSidebarItemsExpandedStateProvider} from '@docusaurus/theme-common/internal';
import DocSidebarItem from '@theme/DocSidebarItem';
// TODO this item should probably not receive the "activePath" props
// TODO this triggers whole sidebar re-renders on navigation
function DocSidebarItems({items, ...props}) {
  const itemsFiltered = items.filter((d) => (d.href || '').indexOf('/wip/') === -1)
  return (
    <DocSidebarItemsExpandedStateProvider>
      {itemsFiltered.map((item, index) => (
        <DocSidebarItem key={index} item={item} index={index} {...props} />
      ))}
    </DocSidebarItemsExpandedStateProvider>
  );
}
// Optimize sidebar at each "level"
export default memo(DocSidebarItems);
