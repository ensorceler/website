import {
  AWSIcon,
  AWSLambdaIcon,
  BabelIcon,
  DiscordIcon,
  DockerIcon,
  DynamoDBIcon,
  ExpressIcon,
  GitIcon,
  GoIcon,
  GraphQLIcon,
  JSIcon,
  MongoDBIcon,
  NextjsIcon,
  NodeJSIcon,
  PostgresIcon,
  PythonIcon,
  ReactIcon,
  RustIcon,
  TailwindIcon,
  TypescriptIcon,
  WebAssemblyIcon,
} from "@/ui/icons";

const techStackList = [
  {
    name: "Typescript",
    icon: <TypescriptIcon fontSize={24} />,
  },
  {
    icon: <DockerIcon fontSize={24} />,
  },
  {
    icon: <NextjsIcon fontSize={24} />,
  },
  {
    icon: <PostgresIcon fontSize={24} />,
  },
  {
    icon: <NodeJSIcon fontSize={24} />,
  },
  {
    icon: <ReactIcon fontSize={24} />,
  },
  {
    icon: <TailwindIcon fontSize={24} />,
  },
  {
    icon: <JSIcon fontSize={24} />,
  },
  {
    icon: <GitIcon fontSize={24} />,
  },
  {
    icon: <WebAssemblyIcon fontSize={24} />,
  },
  {
    icon: <BabelIcon fontSize={24} />,
  },
  {
    icon: <MongoDBIcon fontSize={24} />,
  },
  {
    icon: <AWSIcon fontSize={24} />,
  },
  {
    icon: <DynamoDBIcon fontSize={24} />,
  },
  {
    icon: <GraphQLIcon fontSize={24} />,
  },
  {
    icon: <PythonIcon fontSize={24} />,
  },
  {
    icon: <ExpressIcon fontSize={24} />,
  },
  {
    icon: <RustIcon fontSize={24} />,
  },
  {
    icon: <GoIcon fontSize={24} />,
  },
  {
    icon: <AWSLambdaIcon fontSize={24} />,
  },
];

const TechStackCard = () => {
  return (
    <div className="bg-fuchsia-700  p-5 md:p-10 rounded-2xl flex justify-center items-center ">
      <div className="w-full h-full grid grid-cols-4 gap-2 md:gap-3 text-white ">
        {techStackList.map((item, index) => (
          <div className="flex justify-center items-center" key={index}>
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
};
export default TechStackCard;
