import { StyleSheet, ScrollView, View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from '@/components/ThemedText';
import { useAppTheme } from '@/hooks/useAppTheme';
import { PROFILE, WEIGHT_HISTORY, WEEKLY_CALORIES } from '@/constants/MockData';

function WeightChart({ data, colors }: { data: typeof WEIGHT_HISTORY; colors: any }) {
  const weights = data.map(d => d.weight);
  const min = Math.min(...weights) - 2;
  const max = Math.max(...weights) + 2;
  const range = max - min;

  return (
    <View style={[s.chartCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
      <View style={s.chartHeader}>
        <ThemedText type="defaultSemiBold">Weight Progress</ThemedText>
        <View style={[s.trendBadge, { backgroundColor: colors.success + '18' }]}>
          <Ionicons name="trending-down" size={14} color={colors.success} />
          <ThemedText style={{ fontSize: 11, fontWeight: '700', color: colors.success }}>
            -{(weights[0] - weights[weights.length - 1]).toFixed(1)} lbs
          </ThemedText>
        </View>
      </View>
      <View style={s.chartArea}>
        {data.map((d, i) => {
          const h = ((d.weight - min) / range) * 100;
          const isLast = i === data.length - 1;
          return (
            <View key={d.date} style={s.chartCol}>
              <View style={s.chartBarWrap}>
                <View style={[
                  s.chartBar,
                  { height: `${h}%`, backgroundColor: isLast ? colors.tint : colors.tint + '50', borderRadius: 4 },
                ]} />
              </View>
              <ThemedText type="muted" style={s.chartLabel}>{d.date.split(' ')[1]}</ThemedText>
              <ThemedText style={[s.chartValue, isLast && { color: colors.tint, fontWeight: '800' }]}>{d.weight}</ThemedText>
            </View>
          );
        })}
      </View>
    </View>
  );
}

function CalorieChart({ data, target, colors }: { data: typeof WEEKLY_CALORIES; target: number; colors: any }) {
  const maxVal = Math.max(...data.map(d => d.value), target);

  return (
    <View style={[s.chartCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
      <View style={s.chartHeader}>
        <ThemedText type="defaultSemiBold">Weekly Calories</ThemedText>
        <ThemedText type="muted" style={{ fontSize: 11 }}>Target: {target} kcal</ThemedText>
      </View>
      <View style={s.chartArea}>
        {data.map((d, i) => {
          const h = (d.value / maxVal) * 100;
          const overTarget = d.value > target;
          return (
            <View key={d.day} style={s.chartCol}>
              <View style={s.chartBarWrap}>
                <View style={[
                  s.chartBar,
                  { height: `${h}%`, backgroundColor: overTarget ? colors.warning : colors.accent, borderRadius: 4 },
                ]} />
              </View>
              <ThemedText type="muted" style={s.chartLabel}>{d.day}</ThemedText>
              <ThemedText style={s.chartValue}>{d.value}</ThemedText>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const ACHIEVEMENTS = [
  { icon: '🔥', title: 'Streak Master', desc: `${PROFILE.streak} days in a row`, color: '#f59e0b' },
  { icon: '💪', title: 'Protein Goal', desc: 'Hit target 5 days this week', color: '#10b981' },
  { icon: '💧', title: 'Hydration Pro', desc: '8 glasses 3 days straight', color: '#06b6d4' },
  { icon: '🏋️', title: 'Weight Loss', desc: `Down ${(WEIGHT_HISTORY[0].weight - WEIGHT_HISTORY[WEIGHT_HISTORY.length - 1].weight).toFixed(1)} lbs`, color: '#8b5cf6' },
];

export default function TrackerScreen() {
  const { colors } = useAppTheme();
  const currentWeight = WEIGHT_HISTORY[WEIGHT_HISTORY.length - 1].weight;
  const remaining = currentWeight - PROFILE.targetWeight;
  const progressPct = Math.min(100, ((WEIGHT_HISTORY[0].weight - currentWeight) / (WEIGHT_HISTORY[0].weight - PROFILE.targetWeight)) * 100);

  return (
    <ScrollView style={[s.container, { backgroundColor: colors.background }]} showsVerticalScrollIndicator={false}>
      <View style={s.header}>
        <ThemedText type="title" style={{ fontSize: 28 }}>Tracker</ThemedText>
        <ThemedText type="muted" style={{ marginTop: 4 }}>Your health journey</ThemedText>
      </View>

      {/* Weight overview */}
      <View style={[s.weightOverview, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <View style={s.weightRow}>
          <View style={{ flex: 1 }}>
            <ThemedText type="muted" style={{ fontSize: 12 }}>Current Weight</ThemedText>
            <View style={{ flexDirection: 'row', alignItems: 'baseline', gap: 4 }}>
              <ThemedText style={{ fontSize: 36, fontWeight: '900' }}>{currentWeight}</ThemedText>
              <ThemedText type="muted" style={{ fontSize: 14 }}>lbs</ThemedText>
            </View>
          </View>
          <View style={s.weightDivider} />
          <View style={{ flex: 1, alignItems: 'center' }}>
            <ThemedText type="muted" style={{ fontSize: 12 }}>Goal</ThemedText>
            <ThemedText style={{ fontSize: 24, fontWeight: '700', color: colors.tint }}>{PROFILE.targetWeight}</ThemedText>
            <ThemedText type="muted" style={{ fontSize: 11 }}>{remaining.toFixed(1)} lbs to go</ThemedText>
          </View>
        </View>
        <View style={[s.progressTrack, { backgroundColor: colors.border }]}>
          <View style={[s.progressFill, { width: `${progressPct}%`, backgroundColor: colors.tint }]} />
        </View>
        <ThemedText type="muted" style={{ fontSize: 11, textAlign: 'center', marginTop: 6 }}>
          {progressPct.toFixed(0)}% towards your goal
        </ThemedText>
      </View>

      {/* Charts */}
      <View style={s.section}>
        <WeightChart data={WEIGHT_HISTORY} colors={colors} />
      </View>
      <View style={s.section}>
        <CalorieChart data={WEEKLY_CALORIES} target={PROFILE.calorieTarget} colors={colors} />
      </View>

      {/* Achievements */}
      <View style={s.section}>
        <ThemedText type="defaultSemiBold" style={s.sectionTitle}>Achievements</ThemedText>
        <View style={s.achGrid}>
          {ACHIEVEMENTS.map(a => (
            <View key={a.title} style={[s.achCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
              <View style={[s.achIcon, { backgroundColor: a.color + '18' }]}>
                <ThemedText style={{ fontSize: 22 }}>{a.icon}</ThemedText>
              </View>
              <ThemedText type="defaultSemiBold" style={{ fontSize: 13, marginTop: 8 }}>{a.title}</ThemedText>
              <ThemedText type="muted" style={{ fontSize: 10, marginTop: 2, textAlign: 'center' }}>{a.desc}</ThemedText>
            </View>
          ))}
        </View>
      </View>

      <View style={{ height: 100 }} />
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1 },
  header: { paddingHorizontal: 24, paddingTop: 60, paddingBottom: 16 },
  section: { paddingHorizontal: 20, marginTop: 20 },
  sectionTitle: { marginBottom: 12 },
  weightOverview: { marginHorizontal: 20, padding: 20, borderRadius: 20, borderWidth: 1 },
  weightRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  weightDivider: { width: 1, height: 50, backgroundColor: '#333', marginHorizontal: 16 },
  progressTrack: { height: 8, borderRadius: 4, overflow: 'hidden' },
  progressFill: { height: '100%', borderRadius: 4 },
  chartCard: { padding: 16, borderRadius: 18, borderWidth: 1 },
  chartHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  trendBadge: { flexDirection: 'row', alignItems: 'center', gap: 4, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8 },
  chartArea: { flexDirection: 'row', gap: 4, height: 120, alignItems: 'flex-end' },
  chartCol: { flex: 1, alignItems: 'center' },
  chartBarWrap: { flex: 1, width: '80%', justifyContent: 'flex-end' },
  chartBar: { width: '100%', minHeight: 4 },
  chartLabel: { fontSize: 9, marginTop: 4 },
  chartValue: { fontSize: 9, fontWeight: '600', marginTop: 1 },
  achGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  achCard: { width: '47%', padding: 16, borderRadius: 16, borderWidth: 1, alignItems: 'center' },
  achIcon: { width: 44, height: 44, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
});
