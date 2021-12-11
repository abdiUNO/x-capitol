import { Box, Container, Text } from 'theme-ui';
import SectionHeader from '../components/section-heading';
import Accordion from '../components/accordion/accordion';

const styles = {
  heading: {
    marginBottom: [15, 15, 15, 30],
    fontWeight: 500,
    h2: {
      fontSize: ['24px', '24px', '24px', '28px', '32px', '38px'],
      lineHeight: [1.45, 1.5],
      letterSpacing: '-1.5px',
    },
    p: {
      lineHeight: 1.8,
    },
  },
  listItem: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 2.81,
    display: 'flex',
    alignItems: 'center',
    img: {
      mr: '10px',
    },
  },
  textItem: {
    fontWeight: 400,
    fontSize: [15, 15, 16],
    display: 'flex',
    alignItems: 'center',
    img: {
      mr: '10px',
    },
    mb: '15px',
  },
  listHeader: {
    fontSize: [15, 15, 16],
  },
  listWrapper: {
    fontSize: [15, 15, 16],
    marginTop: '0.5em',
  },
};

const services = [
  {
    title: 'Business lines of credit',
    contents: (
      <Box>
        <Text sx={styles.textItem}>
          A line of credit gives you access to funds up to your credit limit which can be
          borrowed and paid down multiple times while only paying interest on the money
          you borrow. This is a flexible and typically unsecured way to gain funding for
          businesses that need help managing cash flow or handling unexpected expenses.
        </Text>
        <Box>
          <Text sx={styles.listHeader}>Pros:</Text>
          <ul sx={styles.listWrapper}>
            <li>
              <Text>
                Flexible borrowing. Revolving LOC's, use them, pay down, use them again.
              </Text>
            </li>
            <li>
              <Text>Typically no collateral required.</Text>
            </li>
            <li>
              <Text>As low as 0% in many cases.</Text>
            </li>
          </ul>
        </Box>
        <Box>
          <Text sx={styles.listHeader}>Cons:</Text>
          <ul sx={styles.listWrapper}>
            <li>
              <Text>May have maintenance fee or withdrawal fee.</Text>
            </li>
            <li>
              <Text>Good credit and consistent revenue required.</Text>
            </li>
          </ul>
        </Box>

        <Box>
          <Text sx={styles.listHeader}>Best for:</Text>
          <ul sx={styles.listWrapper}>
            <li>
              <Text>Short term needs.</Text>
            </li>
            <li>
              <Text>Seasonal business to manage cash flow.</Text>
            </li>
          </ul>
        </Box>
      </Box>
    ),
  },
  {
    title: 'Merchant Cash Advance',
    contents: (
      <Box>
        <Text sx={styles.textItem}>
          Short term loans that allow for very fast funding so you get a lump sum of cash
          with a predetermined payment term. Payment is usually made daily, weekly or
          bi-weekly. This short term loan is best for businesses with high and consistent
          cash flow that are in need of quick unsecured cash to use however they need.
        </Text>
        <Box>
          <Text sx={styles.listHeader}>Pros:</Text>
          <ul sx={styles.listWrapper}>
            <li>
              <Text>Fast access to capital in as little as 48hrs. </Text>
            </li>
            <li>
              <Text>Unsecured.</Text>
            </li>
            <li>
              <Text>Easy approval process.</Text>
            </li>
            <li>
              <Text>Little documentation needed.</Text>
            </li>
          </ul>
        </Box>
        <Box>
          <Text sx={styles.listHeader}>Cons:</Text>
          <ul sx={styles.listWrapper}>
            <li>
              <Text>Cost of borrowing can be higher.</Text>
            </li>
          </ul>
        </Box>

        <Box>
          <Text sx={styles.listHeader}>Best for:</Text>
          <ul sx={styles.listWrapper}>
            <li>
              <Text>
                Businesses that have high and consistent sales and bank deposits.
              </Text>
            </li>
            <li>
              <Text>Businesses that need financing right away.</Text>
            </li>
          </ul>
        </Box>
      </Box>
    ),
  },
  {
    title: `Invoice Factoring / Working Capital`,
    contents: (
      <Box>
        <Text sx={styles.textItem}>
          Secure working capital through unpaid invoices that your business has so you
          don’t have to wait to be paid. Clients can also use future invoices to get cash
          immediately with also a very fast funding ETA compared to other programs.{' '}
        </Text>
        <Box>
          <Text sx={styles.listHeader}>Pros:</Text>
          <ul sx={styles.listWrapper}>
            <li>
              <Text>Fast Cash.</Text>
            </li>
            <li>
              <Text>Simple and easy approval process.</Text>
            </li>
          </ul>
        </Box>
        <Box>
          <Text sx={styles.listHeader}>Cons:</Text>
          <ul sx={styles.listWrapper}>
            <li>
              <Text>
                An agreement for a certain period of time is generally necessary.
              </Text>
            </li>
          </ul>
        </Box>

        <Box>
          <Text sx={styles.listHeader}>Best for:</Text>
          <ul sx={styles.listWrapper}>
            <li>
              <Text>Businesses that have unpaid invoices that need cash right away.</Text>
            </li>
          </ul>
        </Box>
      </Box>
    ),
  },
  {
    title: `Funding through 401 K / IRA`,
    contents: (
      <Box>
        <Text sx={styles.textItem}>
          Funding option that lets clients get access to funds in their 401K/ IRA with out
          having harsh penalties that are associated with early withdrawals from these
          accounts. This options is tailored made for clients that have these accounts
          already.
        </Text>
        <Box>
          <Text sx={styles.listHeader}>Pros:</Text>
          <ul sx={styles.listWrapper}>
            <li>
              <Text>
                Works well for clients with a 401K / IRA account that need access to
                capital.
              </Text>
            </li>
            <li>
              <Text>
                Can get access to their funds with little to no penalties also while
                paying zero interest on funds as it is theirs by default.
              </Text>
            </li>
          </ul>
        </Box>
        <Box>
          <Text sx={styles.listHeader}>Cons:</Text>
          <ul sx={styles.listWrapper}>
            <li>
              <Text>Using saved funds as opposed to new outside capital.</Text>
            </li>
          </ul>
        </Box>

        <Box>
          <Text sx={styles.listHeader}>Best for:</Text>
          <ul sx={styles.listWrapper}>
            <li>
              <Text>
                Clients who are in need of funds quickly and already have these accounts
                set up that are looking to pay little to no interest.
              </Text>
            </li>
          </ul>
        </Box>
      </Box>
    ),
  },
  {
    title: `Real Estate Financing`,
    contents: (
      <Box>
        <Text sx={styles.textItem}>
          We offer financing to residential and commercial properties whether it be fix n
          flips, new construction, or rehab we offer many different options to clients.
          Along with the option to use existing properties as collateral to gain funding
          as well if need be.
        </Text>
        <Box>
          <Text sx={styles.listHeader}>Pros:</Text>
          <ul sx={styles.listWrapper}>
            <li>
              <Text>Offers great rates while leveraging the property's value. </Text>
            </li>
            <li>
              <Text>Possibility to use a property as collateral.</Text>
            </li>
            <li>
              <Text>Much longer terms with some options allowing up to 30 years.</Text>
            </li>
          </ul>
        </Box>
        <Box>
          <Text sx={styles.listHeader}>Cons:</Text>
          <ul sx={styles.listWrapper}>
            <li>
              <Text>
                The property value or loan to value ratio (LTV) has more of a part to play
                as the property is what is being financed.
              </Text>
            </li>
          </ul>
        </Box>

        <Box>
          <Text sx={styles.listHeader}>Best for:</Text>
          <ul sx={styles.listWrapper}>
            <li>
              <Text>Businesses or individuals looking to purchase real estate.</Text>
            </li>
          </ul>
        </Box>
      </Box>
    ),
  },
  {
    title: `Equipment Financing`,
    contents: (
      <Box>
        <Text sx={styles.textItem}>
          Equipment financing loans help you purchase equipment for your business. The
          equipment serves as collateral and the term is usually calculated off of the
          expected life span of the purchased equipment.
        </Text>
        <Box>
          <Text sx={styles.listHeader}>Pros:</Text>
          <ul sx={styles.listWrapper}>
            <li>
              <Text>After payments complete you own the equipment.</Text>
            </li>
            <li>
              <Text>
                If you have good credit and strong finances you can qualify for
                competitive rates.
              </Text>
            </li>
          </ul>
        </Box>
        <Box>
          <Text sx={styles.listHeader}>Cons:</Text>
          <ul sx={styles.listWrapper}>
            <li>
              <Text>May need a down payment if credit history is not strong enough.</Text>
            </li>
            <li>
              <Text>A home mortgage is necessary for this option.</Text>
            </li>
          </ul>
        </Box>

        <Box>
          <Text sx={styles.listHeader}>Best for:</Text>
          <ul sx={styles.listWrapper}>
            <li>
              <Text>Businesses that are in need of equipment. </Text>
            </li>
          </ul>
        </Box>
      </Box>
    ),
  },
  {
    title: `Terms Loans`,
    contents: (
      <Box>
        <Text sx={styles.textItem}>
          Term loan is a common form of long term business funding. You get a lump some of
          cash upfront to invest in your business and repay with interest over a
          predetermined time period. Best for businesses looking to expand that have good
          credit and strong business revenue. Offers fast funding typically within 2 days
          to a week.
        </Text>
        <Box>
          <Text sx={styles.listHeader}>Pros:</Text>
          <ul sx={styles.listWrapper}>
            <li>
              <Text>Get a lump sum amount of cash to invest in business.</Text>
            </li>
            <li>
              <Text>Borrow higher amounts.</Text>
            </li>
            <li>
              <Text>Get funding in 2 - 7 days.</Text>
            </li>
          </ul>
        </Box>
        <Box>
          <Text sx={styles.listHeader}>Cons:</Text>
          <ul sx={styles.listWrapper}>
            <li>
              <Text>May require some type of collateral.</Text>
            </li>
          </ul>
        </Box>

        <Box>
          <Text sx={styles.listHeader}>Best for:</Text>
          <ul sx={styles.listWrapper}>
            <li>
              <Text>
                Business owners with strong credit and consistent sales who can’t wait for
                funding.
              </Text>
            </li>
          </ul>
        </Box>
      </Box>
    ),
  },
  {
    title: `SBA Loans`,
    contents: (
      <Box>
        <Text sx={styles.textItem}>
          These loans are guaranteed by the Small Business Administration because of this
          they offer some of the lowest rates on the market as well as long repayment
          terms and the ability to borrow up to $5 million. Repayment ranges from 7- 25
          years based upon how you plan to use the money. SBA loans are best for strong
          credit borrowers who have been operating for more than 2 years and are willing
          to work on the long application process to expand their business or refinance
          debt.
        </Text>
        <Box>
          <Text sx={styles.listHeader}>Pros:</Text>
          <ul sx={styles.listWrapper}>
            <li>
              <Text>Lowest rates on the market.</Text>
            </li>
            <li>
              <Text>Borrow up to $5 million.</Text>
            </li>
            <li>
              <Text>Longer repayment terms 7-25 years.</Text>
            </li>
          </ul>
        </Box>
        <Box>
          <Text sx={styles.listHeader}>Cons:</Text>
          <ul sx={styles.listWrapper}>
            <li>
              <Text>Long application process.</Text>
            </li>
            <li>
              <Text>More qualifications required.</Text>
            </li>
            <li>
              <Text>Longer approval ETA.</Text>
            </li>
          </ul>
        </Box>

        <Box>
          <Text sx={styles.listHeader}>Best for:</Text>
          <ul sx={styles.listWrapper}>
            <li>
              <Text>Expanding businesses or refinancing debt.</Text>
            </li>
            <li>
              <Text>Businesses that are willing to wait longer for funding.</Text>
            </li>
          </ul>
        </Box>
      </Box>
    ),
  },
  {
    title: `Credit repair / monitoring`,
    contents: (
      <Box>
        <Text sx={styles.textItem}>
          Understanding the difference between a fraudulent credit repair agency and a
          trusted transparent one is a difficulty for many individuals because so many are
          scams. They give clients the run around with sneaky sales tactics and don’t
          deliver any results leading to many clients wasting their time and most
          importantly their money. That’s why we’re happy to be partnered with ASAP Credit
          Repair, a transparent agency who delivers results along with a 4.5 star rating
          on facebook and a 4.9 star rating on Google respectfully. As many of our clients
          may not meet the minimum requirements due to inquiries, foreclosures,
          bankruptcies etc. We work with ASAP Credit Repair to help clear derogatory
          information with some clients getting finished as soon as 40 days. Also offering
          a money back guarantee if no results are seen in a 60 or 90 day period.
          <br />
          <br />
          Call us today to set up a free consultation!
        </Text>
        <img
          src="https://static.wixstatic.com/media/a6f309_9d44ec5059a94fb19e8f95c104ad1253~mv2.jpeg/v1/fill/w_322,h_224,al_c,q_80,usm_0.66_1.00_0.01/ASAPCreditRepair1-cfa88bb05e064a31b93208.webp"
          alt=""
          sx={{ width: 161, height: 112, objectFit: 'cover' }}
        />
        <Text sx={styles.textItem}>
          We are also partnered with IDIQ to deliver credit/ identity monitoring along
          with instant access to all 3 major credit bureau reports. 9 Million Americans
          lose their identity each year and every day more complain about random inquiries
          and such on their credit history because they haven't checked prior and thus
          this ruins future plans so it's a very good tool to have. With plans as low as
          $9.99 a month.
        </Text>
        <Text sx={styles.textItem}>
          As you move up in the world you're more prone to threats from others. Our
          founder and CEO Osman Xasan has actually had his identity leaked once due to a
          company being breached in the past so he himself advocates for clients to have
          this amazing tool in their arsenal.
        </Text>
        <img
          src="https://static.wixstatic.com/media/a6f309_25e0862865df42888c813d9e6a899460~mv2.jpeg/v1/fill/w_274,h_274,al_c,lg_1,q_80/1604510623465.webp"
          alt=""
          sx={{ width: 137, height: 137, objectFit: 'cover' }}
        />
      </Box>
    ),
  },
];
export default function ServicesList() {
  return (
    <Box as="section" id="services" variant="section.services">
      <Container>
        <SectionHeader
          title="Our Services"
          sx={styles.heading}
          // description="Here at X CAPITOL we help any start up, business, or individual gain access to funding and capital."
        />
        <Box
          sx={{
            display: 'flex',
            width: ['100%', null, null, '650px', '745px'],
            flexDirection: 'column',
            mx: 'auto',
            my: -4,
          }}>
          <Accordion items={services} />
        </Box>
      </Container>
    </Box>
  );
}
