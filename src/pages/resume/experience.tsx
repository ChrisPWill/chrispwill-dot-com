import tw from "twin.macro";

export const ExperienceTitle = tw.div`
  text-lg
  font-bold
`;

export const ExperienceByline = tw.div`
  font-semibold
  md:font-normal
  italic
  my-1
  md:inline-block
  md:w-3/12
  md:align-top
`;

export const ExperienceDetail = tw.div`
  my-1
  md:inline-block
  w-full
  md:w-8/12
`;

export const ExperienceSkill = tw.span`
  rounded-xl
  bg-gray-300
  px-3
  mx-0.5
  my-0.5
  inline-block
`;
