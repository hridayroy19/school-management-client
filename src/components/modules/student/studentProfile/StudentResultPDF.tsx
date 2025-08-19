/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import { IStudent, ResultStudent } from "@/types";


interface StudentReportPDFProps {
  results: ResultStudent[];
  student: IStudent;
  user: { name: string; email: string };
}

// Create styles for the PDF document
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica",
    fontSize: 10,
    border: "2px solid black",
  },
  section: {
    marginBottom: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "1px solid black",
    paddingBottom: 5,
    marginBottom: 10,
  },
  headerText: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
  },
  schoolName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 2,
  },
  schoolAddress: {
    fontSize: 10,
    marginBottom: 5,
  },
  logo: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  reportTitle: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  studentDetails: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  detailRow: {
    flexDirection: "row",
    marginBottom: 4,
    width: "48%",
  },
  detailLabel: {
    fontWeight: "bold",
    width: "40%",
  },
  detailValue: {
    width: "60%",
  },
  table: {
    display: "flex",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableHeader: {
    backgroundColor: "#f2f2f2",
    fontWeight: "bold",
  },
  tableCol: {
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: 5,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
  },
  signatureBox: {
    width: "40%",
    borderTop: "1px solid black",
    paddingTop: 5,
    textAlign: "center",
  },
});

const StudentReportPDF: React.FC<StudentReportPDFProps> = ({
  results,
  student,
  user,
}) => {
  // Calculate totals dynamically from the results prop
  const totalMarksObtained = results.reduce(
    (sum, r) => sum + r.marksObtained,
    0
  );
  const totalGradePoints = results.reduce((sum, r) => sum + r.gradePoint, 0);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image
            src="https://i.ibb.co.com/39k8qSc2/Chat-GPT-Image-Aug-15-2025-03-32-50-PM.png"
            style={styles.logo}
          />
          <View>
            <Text style={styles.schoolName}>HR SCHOOL</Text>
            <Text style={styles.schoolAddress}>
              Dinajpur, DISTT. Dinajpur (Setabgonj) 136 117
            </Text>
            <Text>Whatapp Number (088+)1738211936 , 01789019093</Text>
          </View>
        </View>

        <Text style={styles.reportTitle}>Student Personal Details</Text>

        <View style={styles.studentDetails}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Name of Student</Text>
            <Text style={styles.detailValue}>{user.name}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Fathers Name</Text>
            <Text style={styles.detailValue}>{student.guardianName}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Roll No.</Text>
            <Text style={styles.detailValue}>{student.rollNumber}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Mothers Name</Text>
            {/* Mothers name is not in the provided props, so it is removed */}
            <Text style={styles.detailValue}>N/A</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Class</Text>
            <Text style={styles.detailValue}>{student?.classId?.name as string}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Address</Text>
            <Text style={styles.detailValue}>{student.address}</Text>
          </View>
          {/* DOB is not in props, so it is removed */}
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>DOB</Text>
            <Text style={styles.detailValue}>N/A</Text>
          </View>
        </View>

        <View style={styles.table}>
          {/* Table Header */}
          <View style={[styles.tableRow, styles.tableHeader]}>
            <View style={[styles.tableCol, { width: "30%" }]}>
              <Text>Subject_Name</Text>
            </View>
            <View style={[styles.tableCol, { width: "20%" }]}>
              <Text>Exam</Text>
            </View>
            <View style={[styles.tableCol, { width: "20%" }]}>
              <Text>Marks Obtained</Text>
            </View>
            <View style={[styles.tableCol, { width: "15%" }]}>
              <Text>Grade</Text>
            </View>
            <View style={[styles.tableCol, { width: "15%" }]}>
              <Text>Grade Point</Text>
            </View>
          </View>

          {/* Table Body */}
          {results.map((r, index) => (
            <View style={styles.tableRow} key={index}>
              <View style={[styles.tableCol, { width: "30%" }]}>
                <Text>{r.subjectId?.name}</Text>
              </View>
              <View style={[styles.tableCol, { width: "20%" }]}>
                <Text>{r.term}</Text>
              </View>
              <View style={[styles.tableCol, { width: "20%" }]}>
                <Text>{r.marksObtained}</Text>
              </View>
              <View style={[styles.tableCol, { width: "15%" }]}>
                <Text>{r.grade}</Text>
              </View>
              <View style={[styles.tableCol, { width: "15%" }]}>
                <Text>{r.gradePoint.toFixed(2)}</Text>
              </View>
            </View>
          ))}

          {/* Table Footer with Totals */}
          <View style={styles.tableRow}>
            <View
              style={[styles.tableCol, styles.tableHeader, { width: "30%" }]}
            >
              <Text>TOTAL</Text>
            </View>
            <View
              style={[styles.tableCol, styles.tableHeader, { width: "20%" }]}
            >
              <Text></Text>
            </View>
            <View
              style={[styles.tableCol, styles.tableHeader, { width: "20%" }]}
            >
              <Text>{totalMarksObtained}</Text>
            </View>
            <View
              style={[styles.tableCol, styles.tableHeader, { width: "15%" }]}
            >
              <Text></Text>
            </View>
            <View
              style={[styles.tableCol, styles.tableHeader, { width: "15%" }]}
            >
              <Text>{totalGradePoints.toFixed(2)}</Text>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <View style={styles.signatureBox}>
            <Text>CLASS TEACHER S SIGNATURE</Text>
          </View>
          <View style={styles.signatureBox}>
            <Text>PRINCIPAL S SIGNATURE & SEAL</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default StudentReportPDF;
