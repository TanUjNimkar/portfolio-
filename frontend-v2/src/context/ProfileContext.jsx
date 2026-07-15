import { createContext, useContext, useEffect, useState } from "react";
import {
  getProfile,
  getProjects,
  getSkills,
  getExperience,
  getCertifications,
} from "../services/api";

const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState(null);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);
  const [certifications, setCertifications] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [
          profileRes,
          projectsRes,
          skillsRes,
          experienceRes,
          certificationsRes,
        ] = await Promise.all([
          getProfile(),
          getProjects(),
          getSkills(),
          getExperience(),
          getCertifications(),
        ]);

        setProfile(profileRes.data);
        setProjects(projectsRes.data);
        setSkills(skillsRes.data);
        setExperience(experienceRes.data);
        setCertifications(certificationsRes.data);
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  return (
    <ProfileContext.Provider
      value={{
        profile,
        projects,
        skills,
        experience,
        certifications,
        loading,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  return useContext(ProfileContext);
}