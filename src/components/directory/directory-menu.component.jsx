import React from "react";
import sectionsData from "../../db/directory-menu.data";
import MenuItem from "../menu-item/menu-item.component";
import "./directory-menu.styles.scss";

class DirectoryMenu extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: sectionsData,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionsProps }) => (
          <MenuItem key={id} {...otherSectionsProps} />
        ))}
      </div>
    );
  }
}

export default DirectoryMenu;
