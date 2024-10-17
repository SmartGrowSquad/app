import { Body16, Caption, Title16, Title20, Title24 } from "@/components/StyledText";
import { useGetUrbaniInfoQuery } from "@/store/slices/apiSlice";
import { selectBranch } from "@/store/slices/selectBranchSlice";
import { RootState } from "@/store/store";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { 
  Platform,
  Pressable, 
  SafeAreaView, 
  ScrollView,
  StyleSheet, 
  TextInput, 
  View 
} from "react-native";
import { LatLng } from "react-native-maps";
import { useDispatch, useSelector } from "react-redux";

interface CustomModalProps {}
export default function CustomModal({}: CustomModalProps) {
  const { id } = useLocalSearchParams();
  const [search, setSearch] = useState("");
  const { currentData, isFetching, isError } = useGetUrbaniInfoQuery(Number(id));
  const [region, setRegion] = useState<LatLng>({
    latitude: 37.489616,
    longitude: 126.894123
  });

  const dispatch = useDispatch();

  const handleOnPressBranch = (branch: any) => {
    console.log(branch);
    dispatch(selectBranch(branch))
    router.back();
  }

  useEffect(() => {
    if(!isFetching) {
      console.log(currentData);
    }
  }, [isFetching]);
  return (
    <View style={styles.container}>
      <Title20 style={styles.headerTitle}>지점 검색</Title20>
      <TextInput 
        editable
        placeholder="지점 검색" 
        onChangeText={setSearch}
        value={search}
        style={styles.inputContainer}
      />
      <ScrollView nestedScrollEnabled >

      </ScrollView>
    </View>
  )
}

// #region styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  inputContainer: {
    width: '100%',
    paddingLeft:  16,
    paddingRight:  16,
    paddingBottom: 8,
    paddingTop: 8,
    backgroundColor: "#F4F4F4",
    borderRadius: 8,
  },
  searchItemListContainer: {
    overflow: 'hidden',
    height: 300,
  }, 
  searchItemContainer: {
    flex: 1,
    gap: 8,
    padding: 8,

  },
  searchItemWrapper: {
    flexDirection: 'row',
    gap: 8,
  },
  searchImage:{
    height: 80,
    width: 80,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
  },
  statusBar: {
    backgroundColor: '#fff',
  },
  headerTitle: {
    textAlign: 'center',
    paddingTop: 16,
    paddingBottom: 16,
  }
})