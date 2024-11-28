import linkIconSVG from '@plone/volto/icons/horizontal.svg';
import RelatedItemsView from './components/blocks/RelatedItems/View';
import RelatedItemsEdit from './components/blocks/RelatedItems/Edit';
import { relatedItemsSchema } from './components/blocks/RelatedItems/schema';

const applyConfig = (config) => {
  config.blocks.blocksConfig.relatedItems = {
    id: 'relatedItems',
    title: 'Related items',
    group: 'common',
    icon: linkIconSVG,
    view: RelatedItemsView,
    edit: RelatedItemsEdit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    blockSchema: relatedItemsSchema,
  };

  return config;
};

export default applyConfig;
