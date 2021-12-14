import { gql } from '@apollo/client';

export const QUERY_LAUNCH_LIST = gql`
  query LaunchList($range: LaunchRange) {
    launches(range: $range) {
      flight_number
      mission_name
      launch_year
    }
  }
`;
