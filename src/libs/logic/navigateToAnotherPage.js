const navigateToAnotherPage = () => {
 const handleNavigate = ({ params, screen, navigation }) => {
  navigation.navigate(screen, { params });
 };

 return { handleNavigate };
};

export default navigateToAnotherPage;
