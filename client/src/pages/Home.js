import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import { HomeContainer, HomeBanner, Card, Button} from '../components/styles/Home.styled';
import image from '../images/illustration-flowing-conversation.svg'
import image2 from '../images/illustration-grow-together.svg'
import image3 from '../images/illustration-your-users.svg'

function Home() {
  const { loading, error, data } = useQuery(QUERY_ME);

  if (loading) {
    return 'Loading...';
  }

  if (error) {
    return `Error! ${error.message}`;
  }

  const { me: { companyName, companyDetails,username } } = data;

  return (
    <HomeContainer>
      <HomeBanner>
        <h2>Welcome {username} !</h2>
        <p>Company Name: {companyName}</p>
        <p>Company Details: {companyDetails}</p>
      </HomeBanner>
      <Card>
        <div>
          <h2>My Suppliers</h2>
          <p>Here you can see: Supplier's List and Create a new Supplier or One Supplier and modify or delete it.  </p>
          <Button><a href="/suppliers">My Suppliers</a></Button>
        </div>
        <div>
          <img src={image} alt='' />
        </div>
      </Card>

      <Card>
        <div>
          <h5>My Inventory</h5>
          <p>Here you can see: Material's list and Update the Stock, Safety Stock and Anticipated Demand or view One Material and Place an Order</p>
          <Button><a href="/inventory">My Inventory</a></Button>
        </div>
        <div>
          <img src={image2} alt='' />
        </div>
      </Card>

      <Card>
        <div>
          <h5>My Production</h5>
          <p>Here you can send materials to production.</p>
          <Button><a href="/production">My Production</a></Button>
        </div>
        <div>
          <img src={image3} alt='' />
        </div>
      </Card>
    </HomeContainer>
  );
}

export default Home;