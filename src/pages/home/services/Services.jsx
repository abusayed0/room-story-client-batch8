import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

const Services = () => {
    return (
        <div className="mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        Personalized Design Consultation
                    </Typography>
                    <Typography>
                        Our experienced designers will work closely with you to understand your style, preferences, and vision for your space. Receive personalized design recommendations, color schemes, and layout ideas to transform your room into a harmonious and stylish oasis
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button>Book Now</Button>
                </CardFooter>
            </Card>
            <Card>
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        Furniture Customization
                    </Typography>
                    <Typography>


                        Tailor your furniture to match your unique style. Choose from a variety of fabrics, finishes, and designs to create custom pieces that seamlessly integrate into your room. Our skilled craftsmen will bring your vision to life.
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button>Book Now</Button>
                </CardFooter>
            </Card>
            <Card>
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        Eco-Friendly Room Makeover
                    </Typography>
                    <Typography>




                        Go green with our sustainable room decoration service. We prioritize eco-friendly materials, energy-efficient lighting, and upcycled furniture to create a beautiful and environmentally conscious living space. Embrace sustainable living without compromising on style.
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button>Book Now</Button>
                </CardFooter>
            </Card>
            <Card>
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        Virtual Design Packages
                    </Typography>
                    <Typography>





                        Can't meet in person? No problem! Explore our virtual design packages where our designers collaborate with you remotely. Receive mood boards, 3D renderings, and a comprehensive design plan, all from the comfort of your home.

                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button>Book Now</Button>
                </CardFooter>
            </Card>
            <Card>
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        Seasonal Refresh
                    </Typography>
                    <Typography>






                        Description: Keep your space vibrant year-round with our seasonal room refresh service. Our designers will update your decor to reflect the changing seasons, ensuring your home always feels current and inviting. Embrace the beauty of each season with a fresh look.

                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button>Book Now</Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default Services;