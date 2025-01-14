import React, { useContext } from "react";
import { Col, Input, Row } from "@canonical/react-components";
import { FormContext } from "advantage/subscribe/react/utils/FormContext";
import { PRO_SELECTOR_KEYS } from "advantage/distributor/utils/utils";

const Quantity = () => {
  const { quantity, setQuantity } = useContext(FormContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(event.target.value) > 0) {
      setQuantity(Number(event.target.value));
      localStorage.setItem(
        PRO_SELECTOR_KEYS.QUANTITY,
        JSON.stringify(Number(event.target.value))
      );
    } else {
      setQuantity("");
    }
  };

  return (
    <div data-testid="wrapper">
      <Row>
        <Col size={2}>
          <Input
            id="quantity-input"
            type="number"
            name="quantity"
            placeholder="0"
            min="1"
            max="1000"
            step="1"
            data-stage="form"
            onChange={handleChange}
            value={quantity}
            pattern="\d+"
            style={{ minWidth: "unset", width: "4rem" }}
            aria-label="For how many machines"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Quantity;
