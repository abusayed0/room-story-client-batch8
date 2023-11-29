import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";

const Blogs = () => {
    return (
        <div className="mt-28 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card
                shadow={false}
                className="relative grid h-[30rem] w-full  items-end justify-center overflow-hidden text-center"
            >
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://i.ibb.co/XXmtGnd/top-view-ring-binder-23-2149568983.jpg')] bg-cover bg-center"
                >
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                </CardHeader>
                <CardBody className="relative py-14 px-6 md:px-12">
                    <Typography
                        variant="h2"
                        color="white"
                        className="mb-6 font-medium leading-[1.5]"
                    >
                       Unveiling the Power of Color: A Guide to Choosing the Perfect Palette for Your Space
                    </Typography>
                    <Typography variant="h5" className="mb-4 text-gray-400">
                        Tania Andrew
                    </Typography>
                    <Avatar
                        size="xl"
                        variant="circular"
                        alt="tania andrew"
                        className="border-2 border-white"
                        src="https://i.ibb.co/2Ktng08/portrait-teenage-boy-23-2148105583.jpg"
                    />
                </CardBody>
            </Card>
            <Card
                shadow={false}
                className="relative grid h-[30rem] w-full items-end justify-center overflow-hidden text-center"
            >
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://i.ibb.co/zNcFqhX/flat-lay-work-space-with-coffee-cup-keyboard-23-2148397861.jpg')] bg-cover bg-center"
                >
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                </CardHeader>
                <CardBody className="relative py-14 px-6 md:px-12">
                    <Typography
                        variant="h2"
                        color="white"
                        className="mb-6 font-medium leading-[1.5]"
                    >
                      DIY Delight: Transform Your Space with Budget-Friendly Room Decor Projects
                    </Typography>
                    <Typography variant="h5" className="mb-4 text-gray-400">
                        Jliya Karli
                    </Typography>
                    <Avatar
                        size="xl"
                        variant="circular"
                        alt="tania andrew"
                        className="border-2 border-white"
                        src="https://i.ibb.co/rpLSXfj/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray.jpg"
                    />
                </CardBody>
            </Card>
        </div>
    );
};

export default Blogs;

