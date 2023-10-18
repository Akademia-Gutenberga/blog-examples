import { registerBlockType } from "@wordpress/blocks";
import { useState } from "@wordpress/element";
import { InspectorControls } from "@wordpress/block-editor";
import { Card, CardBody, Button } from "@wordpress/components";

import metadata from "./block.json";

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <Card>
      <CardBody>
        <Button variant="primary" onClick={handleClick}>
          You pressed me {count} times
        </Button>
      </CardBody>
    </Card>
  );
}

function Edit() {
  return (
    <div>
      <InspectorControls>
        <Counter />
      </InspectorControls>
    </div>
  );
}

function save() {
  return <div>To co pokaże się na froncie</div>;
}

registerBlockType(metadata.name, {
  edit: Edit,
  save,
});
