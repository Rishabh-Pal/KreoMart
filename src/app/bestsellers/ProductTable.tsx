import React from "react";
import { useState } from "react";

interface Product {
  description: string;
  additionalInfo: string;
  review: string;
}

interface Props {
  products: Product[];
}

function ProductTable() {
  const ProductTable: React.FC<Props> = ({ products }) => {
    const [showDescription, setShowDescription] = useState(true);
    const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
    const [showReview, setShowReview] = useState(false);

    const toggleDescription = () => {
      setShowDescription(true);
      setShowAdditionalInfo(false);
      setShowReview(false);
    };

    const toggleAdditionalInfo = () => {
      setShowDescription(false);
      setShowAdditionalInfo(true);
      setShowReview(false);
    };

    const toggleReview = () => {
      setShowDescription(false);
      setShowAdditionalInfo(false);
      setShowReview(true);
    };

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th onClick={toggleDescription}>Description</th>
              <th onClick={toggleAdditionalInfo}>Additional Info</th>
              <th onClick={toggleReview}>Review</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{showDescription ? product.description : ""}</td>
                <td>{showAdditionalInfo ? product.additionalInfo : ""}</td>
                <td>{showReview ? product.review : ""}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
}

export default ProductTable;
