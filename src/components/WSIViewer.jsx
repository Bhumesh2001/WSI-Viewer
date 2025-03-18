import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import BoundingBox from "./BoundingBox";
import imageSrc from "../assets/image.png";
import rawData from "../assets/output.json";
import "../styles.css";

const WSIViewer = () => {
    const [zoom, setZoom] = useState(1);
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
    const imageContainerRef = useRef(null);

    let detectionResults = [];

    try {
        // Access detection results directly
        detectionResults = rawData.inference_results.output.detection_results;
    } catch (error) {
        console.error("Error parsing JSON:", error.message);
    }

    // Adjust container size dynamically based on viewport
    useEffect(() => {
        const updateSize = () => {
            if (imageContainerRef.current) {
                setContainerSize({
                    width: imageContainerRef.current.clientWidth,
                    height: imageContainerRef.current.clientHeight,
                });
            }
        };

        window.addEventListener("resize", updateSize);
        updateSize(); // Initial call

        return () => window.removeEventListener("resize", updateSize);
    }, []);

    return (
        <Container fluid>
            <Row>
                {/* Left Panel */}
                <Col md={3} className="bg-light p-3">
                    <h4>Findings</h4>
                    <p>Sample Type: {rawData.sample_type}</p>
                    <p>Date: {rawData.date}</p>
                </Col>

                {/* Main Viewer */}
                <Col md={6} className="text-center">
                    <div className="image-container" ref={imageContainerRef}>
                        <div
                            className="image-wrapper"
                            style={{
                                transform: `scale(${zoom})`,
                                width: `${containerSize.width}px`,
                                height: `${containerSize.height}px`,
                            }}
                        >
                            <img src={imageSrc} alt="WSI" className="zoomable" />
                            {detectionResults.map((box, index) => (
                                <BoundingBox key={index} coords={box} zoom={zoom} />
                            ))}
                        </div>
                    </div>
                    <Button variant="primary" onClick={() => setZoom(zoom + 0.2)}>Zoom In</Button>
                    <Button variant="secondary" onClick={() => setZoom(Math.max(1, zoom - 0.2))}>Zoom Out</Button>
                </Col>

                {/* Hub View */}
                <Col md={3} className="p-3">
                    <Card>
                        <Card.Body>
                            <Card.Title>Hub View</Card.Title>
                            <img src={imageSrc} alt="Hub View" className="hub-view" />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default WSIViewer;
