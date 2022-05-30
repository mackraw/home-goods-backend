import { integer, relationship, select, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Product = list({
  fields: {
    name: text({ isRequired: true }),
    category: select({
      options: [
        { label: 'Ceramics', value: 'Ceramics' },
        { label: 'Chairs', value: 'Chairs' },
        { label: 'Clocks', value: 'Clocks' },
        { label: 'Couches', value: 'Couches' },
        { label: 'Knives', value: 'Knives' },
        { label: 'Plants', value: 'Plants' },
        { label: 'Lighting', value: 'Lighting' },
        { label: 'Not Categorized', value: 'Not Categorized' },
      ],
      defaultValue: 'Not Categorized',
    }),
    description: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    status: select({
      options: [
        { label: 'Draft', value: 'Draft' },
        { label: 'Available', value: 'Available' },
        { label: 'Out of Stock', value: 'Out of Stock' },
      ],
      defaultValue: 'Available',
    }),
    price: integer(),
    rating: integer(),
    photo: relationship({
      ref: 'ProductImage.product',
      ui: {
        displayMode: 'cards',
        cardFields: ['image', 'altText'],
        inlineCreate: { fields: ['image', 'altText'] },
        inlineEdit: { fields: ['image', 'altText'] },
      },
    }),
  },
});
