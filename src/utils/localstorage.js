const getIdeas = (key) => {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const saveIdeas = (key, ideas) => {
  localStorage.setItem(key, JSON.stringify(ideas));
};


export const getWantedIdeasID = () => getIdeas("wantedIdeas");

export const isIdeaWanted = (id) => {
  return getWantedIdeasID().includes(id);
};

export const addWantedIdea = (id) => {
  const ideas = getWantedIdeasID();
  if (!ideas.includes(id)) {
    ideas.push(id);
    saveIdeas("wantedIdeas", ideas);
  }
};


export const getUnwantedIdeasID = () => getIdeas("unwantedIdeas");

export const isIdeaUnwanted = (id) => {
  return getUnwantedIdeasID().includes(id);
};

export const addUnwantedIdea = (id) => {
  const ideas = getUnwantedIdeasID();
  if (!ideas.includes(id)) {
    ideas.push(id);
    saveIdeas("unwantedIdeas", ideas);
  }
};
