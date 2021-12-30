import React from "react";
import collectionsData from "../../db/shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class ShopPage extends React.Component {
  constructor() {
    super();

    this.state = {
      collections: collectionsData,
    };
  }

  render() {
    const { collections } = this.state;

    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
